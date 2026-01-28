/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/login_screen`; params?: Router.UnknownInputParams; } | { pathname: `/auth/register_screen`; params?: Router.UnknownInputParams; } | { pathname: `/auth/reset_password`; params?: Router.UnknownInputParams; } | { pathname: `/auth/role_selection`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/login_screen`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/register_screen`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/reset_password`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/role_selection`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/auth/login_screen${`?${string}` | `#${string}` | ''}` | `/auth/register_screen${`?${string}` | `#${string}` | ''}` | `/auth/reset_password${`?${string}` | `#${string}` | ''}` | `/auth/role_selection${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/login_screen`; params?: Router.UnknownInputParams; } | { pathname: `/auth/register_screen`; params?: Router.UnknownInputParams; } | { pathname: `/auth/reset_password`; params?: Router.UnknownInputParams; } | { pathname: `/auth/role_selection`; params?: Router.UnknownInputParams; };
    }
  }
}
