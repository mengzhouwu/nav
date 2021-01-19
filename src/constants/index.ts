// Copyright @ 2018-2021 xiejiahe. All rights reserved. MIT license.
function isMac() {
  return /mac os x/i.test(navigator.userAgent.toLowerCase());
}

export const VERIFY_PATH = 'nav.verify.txt'

export const DB_PATH = 'data/db.json'

export const VERSION = '5.0.3'

// keyboard event
const prefix = isMac() ? 'command' : 'ctrl'
export const KEY_MAP = {
  // 编辑模式
  edit: `${prefix}+e`,

  // 查看信息
  view: `${prefix}+v`,

  // 暗黑模式
  dark: `${prefix}+d`
}