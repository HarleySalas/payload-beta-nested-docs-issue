/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    user: User;
    page: Page;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
  locale: 'ar' | 'cz' | 'de' | 'en' | 'pl' | 'ru' | 'tr';
  user: User & {
    collection: 'user';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user".
 */
export interface User {
  id: number;
  roles?: ('banned' | 'user' | 'member' | 'maintainer' | 'admin')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "page".
 */
export interface Page {
  id: number;
  title?: string | null;
  fullTitle?: string | null;
  slug?: string | null;
  pathname?: string | null;
  template?: (LoginBlock | ProfileBlock | CreateProfileBlock)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LoginBlock".
 */
export interface LoginBlock {
  subtitle?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  loginWithDiscord?: string | null;
  privacyPolicy?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  security?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'login';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProfileBlock".
 */
export interface ProfileBlock {
  id?: string | null;
  blockName?: string | null;
  blockType: 'profile';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CreateProfileBlock".
 */
export interface CreateProfileBlock {
  features?:
    | {
        feature?: string | null;
        id?: string | null;
      }[]
    | null;
  createAProfile?: string | null;
  subtitle?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  usernameDescription?: string | null;
  slugDescription?: string | null;
  submitLabel?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'createProfile';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'user';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}