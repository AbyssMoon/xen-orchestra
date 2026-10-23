import type { FrontXoPool } from '@/modules/pool/remote-resources/use-xo-pool-collection.ts'
import { SDN_CONTROLLER_OF_METHOD_KEY } from '@vates/types'

export function isNetworkRuleSupported(pool: FrontXoPool | undefined): boolean {
  const ofMethod = pool?.otherConfig[SDN_CONTROLLER_OF_METHOD_KEY]

  return ofMethod === 'xapi-plugin'
}

export function getOrdinalSuffix(suffixesMessage: string, locale: string, position: number): string | undefined {
  const suffixes = new Map<string, string>()

  for (const entry of suffixesMessage.split(',')) {
    const [category, suffix] = entry.trim().split(':')
    suffixes.set(category, suffix)
  }

  const category = new Intl.PluralRules(locale, { type: 'ordinal' }).select(position)

  return suffixes.get(category)
}
