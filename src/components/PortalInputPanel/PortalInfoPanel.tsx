import React from 'react'
import { Currency, ETHER, Pair } from '@arborswap/sdk'
import { useNetworkChainId } from 'state/hooks'
import { Button, ChevronDownIcon, Text, useModal, Flex, Box } from '@arborswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { getCurrencySymbol } from 'utils/getNativeName'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import CustomLogo from 'components/Logo/CustomLogo'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'
import { RowBetween } from '../Layout/Row'

const InputRow = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 5px;
  border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};
`
const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  padding: 1rem;
  height: 44px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  min-width: 120px;
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 0;
`
const ButtonDivider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-left: 10px;
  border-left: 1px dashed ${({ theme }) => theme.colors.textSubtle};
`

const LabelAmtRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 0;
  margin-top: 30px;
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`
const Container = styled.div<{ hideInput?: boolean }>`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 4px;
  padding: 0.75rem 1rem;
`
interface CurrencyInputPanelProps {
  id?: string
  value: string
  label?: string
  amount?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
}
export default function PortalInfoPanel({
  id,
  value,
  label,
  amount,
  onCurrencySelect,
  currency,
}: CurrencyInputPanelProps) {
  const chainId = useNetworkChainId()
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()
  const translatedLabel = label || t('Input')
  const translatedAmount = amount || t('Amount')

  return (
    <InputPanel id={id}>
      <Container>
        <>
          <LabelRow>
            <RowBetween align="">
              <Flex justifyContent="center">
                <Text fontSize="16px">{translatedLabel}</Text>
                <Box marginLeft="4px" />
                <CustomLogo
                  image="https://raw.githubusercontent.com/wongjapan/arbor-assets/master/rba.png"
                  size="24px"
                />
                <Text fontSize="16px" marginLeft="4px">
                  Roburna
                </Text>
              </Flex>
            </RowBetween>
          </LabelRow>
        </>

        <InputRow>
          <>
            <>
              <Text fontSize="16px">{value}</Text>
            </>
            <CurrencySelectButton selected={!!currency} className="open-currency-select-button">
              <Flex width="100%" alignItems="center" justifyContent="space-between">
                <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
                <Text id="pair">
                  {(currency && currency.symbol && currency.symbol.length > 20
                    ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                        currency.symbol.length - 5,
                        currency.symbol.length,
                      )}`
                    : getCurrencySymbol(currency, chainId)) || t('Select a currency')}
                </Text>
              </Flex>
            </CurrencySelectButton>
          </>
        </InputRow>
      </Container>
    </InputPanel>
  )
}
