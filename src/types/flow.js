// @flow
export type ObjStringKeyValuesType = { [key: string]: string }

export type CssModuleType = ObjStringKeyValuesType

export type FlagIconSizesType =
  | "lg"
  | "2x"
  | "3x"
  | "4x"
  | "5x"

export type FlagIconRotateType =
  | 30
  | 60
  | 90
  | 180
  | 270

export type FlagIconFlipType =
  | "horizontal"
  | "vertical"

export type FlagIconPropsType = {
  code: string,
  squared?: boolean,
  size?: FlagIconSizesType,
  rotate?: FlagIconRotateType,
  flip?: FlagIconFlipType,
  Component?: string,
  children?: React$Element<*>
}

export type FlagIconOptionsType = {
  useCssModules?: boolean,
  themeStyles?: CssModuleType
}

export type KeyCallbackType = (key: string) => string

export type FlagIconCodeType =
  | "ad"
  | "ae"
  | "af"
  | "ag"
  | "ai"
  | "al"
  | "am"
  | "ao"
  | "aq"
  | "ar"
  | "as"
  | "at"
  | "au"
  | "aw"
  | "ax"
  | "az"
  | "ba"
  | "bb"
  | "bd"
  | "be"
  | "bf"
  | "bg"
  | "bh"
  | "bi"
  | "bj"
  | "bl"
  | "bm"
  | "bn"
  | "bo"
  | "bq"
  | "br"
  | "bs"
  | "bt"
  | "bv"
  | "bw"
  | "by"
  | "bz"
  | "ca"
  | "cc"
  | "cd"
  | "cf"
  | "cg"
  | "ch"
  | "ci"
  | "ck"
  | "cl"
  | "cm"
  | "cn"
  | "co"
  | "cr"
  | "cu"
  | "cv"
  | "cw"
  | "cx"
  | "cy"
  | "cz"
  | "de"
  | "dj"
  | "dk"
  | "dm"
  | "do"
  | "dz"
  | "ec"
  | "ee"
  | "eg"
  | "eh"
  | "er"
  | "es"
  | "et"
  | "fi"
  | "fj"
  | "fk"
  | "fm"
  | "fo"
  | "fr"
  | "ga"
  | "gb"
  | "gd"
  | "ge"
  | "gf"
  | "gg"
  | "gh"
  | "gi"
  | "gl"
  | "gm"
  | "gn"
  | "gp"
  | "gq"
  | "gr"
  | "gs"
  | "gt"
  | "gu"
  | "gw"
  | "gy"
  | "hk"
  | "hm"
  | "hn"
  | "hr"
  | "ht"
  | "hu"
  | "id"
  | "ie"
  | "il"
  | "im"
  | "in"
  | "io"
  | "iq"
  | "ir"
  | "is"
  | "it"
  | "je"
  | "jm"
  | "jo"
  | "jp"
  | "ke"
  | "kg"
  | "kh"
  | "ki"
  | "km"
  | "kn"
  | "kp"
  | "kr"
  | "kw"
  | "ky"
  | "kz"
  | "la"
  | "lb"
  | "lc"
  | "li"
  | "lk"
  | "lr"
  | "ls"
  | "lt"
  | "lu"
  | "lv"
  | "ly"
  | "ma"
  | "mc"
  | "md"
  | "me"
  | "mf"
  | "mg"
  | "mh"
  | "mk"
  | "ml"
  | "mm"
  | "mn"
  | "mo"
  | "mp"
  | "mq"
  | "mr"
  | "ms"
  | "mt"
  | "mu"
  | "mv"
  | "mw"
  | "mx"
  | "my"
  | "mz"
  | "na"
  | "nc"
  | "ne"
  | "nf"
  | "ng"
  | "ni"
  | "nl"
  | "no"
  | "np"
  | "nr"
  | "nu"
  | "nz"
  | "om"
  | "pa"
  | "pe"
  | "pf"
  | "pg"
  | "ph"
  | "pk"
  | "pl"
  | "pm"
  | "pn"
  | "pr"
  | "ps"
  | "pt"
  | "pw"
  | "py"
  | "qa"
  | "re"
  | "ro"
  | "rs"
  | "ru"
  | "rw"
  | "sa"
  | "sb"
  | "sc"
  | "sd"
  | "se"
  | "sg"
  | "sh"
  | "si"
  | "sj"
  | "sk"
  | "sl"
  | "sm"
  | "sn"
  | "so"
  | "sr"
  | "ss"
  | "st"
  | "sv"
  | "sx"
  | "sy"
  | "sz"
  | "tc"
  | "td"
  | "tf"
  | "tg"
  | "th"
  | "tj"
  | "tk"
  | "tl"
  | "tm"
  | "tn"
  | "to"
  | "tr"
  | "tt"
  | "tv"
  | "tw"
  | "tz"
  | "ua"
  | "ug"
  | "um"
  | "us"
  | "uy"
  | "uz"
  | "va"
  | "vc"
  | "ve"
  | "vg"
  | "vi"
  | "vn"
  | "vu"
  | "wf"
  | "ws"
  | "ye"
  | "yt"
  | "za"
  | "zm"
  | "zw"

export type FlagIconReturnType = (props: FlagIconPropsType) => React$Element<*>

export type FlagIconFactoryReturnType = FlagIconReturnType

export type CountryType = {
  name: string,
  code: FlagIconCodeType
}
