// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { ContentfulCredentialsProvider } from "@plasmicpkgs/plasmic-contentful"; // plasmic-import: lXSCSEWn2xb/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: DmrLLHGTjGTE/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  contentfulCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ContentfulCredentialsProvider>, "children">
  >;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    contentfulCredentialsProviderProps,
    antdConfigProviderProps
  } = props;

  return (
    <ContentfulCredentialsProvider
      {...contentfulCredentialsProviderProps}
      accessToken={
        contentfulCredentialsProviderProps &&
        "accessToken" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.accessToken!
          : ("QLonOjpq-GLtyKef5G5BEmhpfS4QqrEIObzBQnknyv0" as const)
      }
      environment={
        contentfulCredentialsProviderProps &&
        "environment" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.environment!
          : ("master" as const)
      }
      space={
        contentfulCredentialsProviderProps &&
        "space" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.space!
          : ("5u36ckios6iw" as const)
      }
    >
      <AntdConfigProvider
        {...antdConfigProviderProps}
        borderRadius={
          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius!
            : (6 as const)
        }
        colorBgBase={
          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase!
            : ("#ffffff" as const)
        }
        colorError={
          antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError!
            : ("#ff4d4f" as const)
        }
        colorInfo={
          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo!
            : ("#1677ff" as const)
        }
        colorPrimary={
          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary!
            : ("#1677ff" as const)
        }
        colorSuccess={
          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess!
            : ("#52c41a" as const)
        }
        colorWarning={
          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning!
            : ("#faad14" as const)
        }
        controlHeight={
          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight!
            : (32 as const)
        }
        defaultDark={
          antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
            ? antdConfigProviderProps.defaultDark!
            : false
        }
        lineWidth={
          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth!
            : (1 as const)
        }
        sizeStep={
          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep!
            : (4 as const)
        }
        sizeUnit={
          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit!
            : (4 as const)
        }
        themeStyles={
          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles!
            : true
            ? {
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "1.5",
                color: "#333333",
                letterSpacing: "normal"
              }
            : undefined
        }
        wireframe={
          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe!
            : false
        }
      >
        {children}
      </AntdConfigProvider>
    </ContentfulCredentialsProvider>
  );
}
