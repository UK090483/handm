import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Setting navigation
 *
 *
 */
export interface SettingNavigation extends SanityDocument {
  _type: "settingNavigation";

  /**
   * name — `text`
   *
   *
   */
  name?: string;
}

/**
 * Default SEO / Share
 *
 *
 */
export interface SeoSettings extends SanityDocument {
  _type: "seoSettings";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Site config
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Home Page — `reference`
   *
   *
   */
  indexPage?: SanityReference<Page>;

  /**
   * Main Navigation — `array`
   *
   *
   */
  mainNav?: Array<
    SanityKeyed<NavigationItem> | SanityKeyed<NavigationDropdown>
  >;

  /**
   * Extra Navigation — `array`
   *
   *
   */
  extraNav?: Array<
    SanityKeyed<NavigationItem> | SanityKeyed<NavigationDropdown>
  >;

  /**
   * Default / Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Blog Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * erreichbar unter http://localhost:3000/posts/...
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Header Image — `image`
   *
   *
   */
  headerImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<PostCategory>>;

  /**
   * Release date — `date`
   *
   *
   */
  releaseDate?: string;

  /**
   * Use default Header — `boolean`
   *
   *
   */
  default_header?: boolean;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<SanityKeyed<Section> | SanityKeyed<Listing>>;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Category
 *
 *
 */
export interface PostCategory extends SanityDocument {
  _type: "postCategory";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * pageType — `reference`
   *
   *
   */
  pageType?: SanityReference<PageType>;

  /**
   * Header — `pageHeader`
   *
   *
   */
  pageHeader?: PageHeader;

  /**
   * Footer — `reference`
   *
   * if empty it will use the default Footer
   */
  footer?: SanityReference<Footer>;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<SanityKeyed<Section> | SanityKeyed<Listing>>;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "navigation";

  /**
   * Main Navigation — `array`
   *
   *
   */
  item?: Array<SanityKeyed<Link> | SanityKeyed<NavigationDropdown>>;
}

/**
 * Redirect
 *
 *
 */
export interface Redirect extends SanityDocument {
  _type: "redirect";

  /**
   * From — `string`
   *
   *
   */
  from?: string;

  /**
   * To — `string`
   *
   *
   */
  to?: string;

  /**
   * Is Permanent? — `boolean`
   *
   *
   */
  isPermanent?: boolean;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<SanityKeyed<Section> | SanityKeyed<Listing>>;
}

/**
 * Page type
 *
 *
 */
export interface PageType extends SanityDocument {
  _type: "pageType";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

export type DefaultImage = {
  _type: "defaultImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type Link = {
  _type: "link";
  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website bli
   */
  internalLink?: SanityReference<Page>;

  /**
   * On Page Position — `string`
   *
   *
   */
  onPage?: string;

  /**
   * External link — `url`
   *
   *
   */
  externalLink?: string;
};

export type PageHeader = {
  _type: "pageHeader";
  /**
   * Initial Page header color — `string`
   *
   *
   */
  color?: "white" | "black";

  /**
   * PageTitle without Logo — `boolean`
   *
   *
   */
  withOutLogo?: boolean;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title — `string`
   *
   * Title used for search engines and browsers.
   */
  metaTitle?: string;

  /**
   * Meta Description — `text`
   *
   * Description for search engines.
   */
  metaDesc?: string;

  /**
   * Share Title — `string`
   *
   * TItle used for social sharing cards.
   */
  shareTitle?: string;

  /**
   * Share Description — `text`
   *
   * Description for social sharing cards.
   */
  shareDesc?: string;

  /**
   * Share Graphic — `image`
   *
   * Share graphics will be cropped to 1200x630
   */
  shareGraphic?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type NavigationDropdown = {
  _type: "navigationDropdown";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  item?: Array<SanityKeyed<NavigationItem>>;
};

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `link`
   *
   *
   */
  link?: Link;
};

export type Section = {
  _type: "section";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Content — `defaultRichText`
   *
   *
   */
  content?: DefaultRichText;

  /**
   * Type — `string`
   *
   *
   */
  type?: "normal" | "medium-wide" | "text" | "hero" | "full-width";

  /**
   * Background Color — `string`
   *
   *
   */
  bgColor?: "black" | "white" | "primary" | "red" | "grey";

  /**
   * Top Space — `string`
   *
   *
   */
  topSpace?: "s" | "m" | "l" | "xl" | "xxl";

  /**
   * Bottom Space — `string`
   *
   *
   */
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl";

  /**
   * Background Image — `defaultImage`
   *
   *
   */
  bgImage?: DefaultImage;
};

export type Listing = {
  _type: "listing";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * contentType — `string`
   *
   *
   */
  contentType?: "post" | "project";
};

export type DefaultRichText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<Button> | SanityKeyed<Spacer>
>;

export type Button = {
  _type: "button";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Label En — `string`
   *
   *
   */
  label_en?: string;

  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  internalLink?: SanityReference<Page>;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;

  /**
   * Color — `string`
   *
   *
   */
  color?: "black" | "white" | "primary" | "red" | "grey";

  /**
   * Background Color — `string`
   *
   *
   */
  bgColor?: "black" | "white" | "primary" | "red" | "grey";

  /**
   * Position — `string`
   *
   *
   */
  position?: "inline" | "left" | "right" | "center";
};

export type Spacer = {
  _type: "spacer";
  /**
   * Space — `string`
   *
   *
   */
  space?: "s" | "m" | "l" | "xl" | "xxl";
};

export type Documents =
  | SettingNavigation
  | SeoSettings
  | SiteConfig
  | Post
  | PostCategory
  | Page
  | Navigation
  | Redirect
  | Footer
  | PageType;
