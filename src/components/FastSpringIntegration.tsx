"use client"

import React, { useEffect } from "react";
import Script from "next/script";
import { useFastSpringStore } from "../stores/fastSpringStore";

interface FastSpringIntegrationProps {
  children: React.ReactNode;
}

export function FastSpringIntegration({ children }: FastSpringIntegrationProps) {
  const setProducts = useFastSpringStore((state) => state.setProducts);
  const setData = useFastSpringStore((state) => state.setData);

  const fastSpringCallBack = (data: any) => {
    setData(data);
    console.log(data);
    if (data && data.groups) {
      const newProducts = data.groups
        .filter((group: any) => group.items && Array.isArray(group.items))
        .flatMap((group: any) => group.items);
      setProducts(newProducts);
    }
  };

  useEffect(() => {
    (window as any).onFSPopupClosed = function (orderReference: any) {
      if (window.fastspring && window.fastspring.builder) {
        window.fastspring.builder.reset();
      }
      if (orderReference && orderReference.id) {
        window.location.replace(
          "success?orderId=" + orderReference.id
        );
      }
    };

    (window as any).fastSpringCallBack = fastSpringCallBack;
  }, [setData, setProducts]);

  return (
    <>
      <Script
        id="fsc-api"
        src="https://sbl.onfastspring.com/sbl/1.0.1/fastspring-builder.min.js"
        strategy="lazyOnload"
        data-continuous="true"
        data-storefront="yaotx.test.onfastspring.com/popup-yaotx"
        data-data-callback="fastSpringCallBack"
        data-popup-webhook-received="onFSPopupClosed"
      />
      {children}
    </>
  );
};