import React from 'react'
import { Currency, ETHER, Pair } from '@arborswap/sdk'
import { useNetworkChainId } from 'state/hooks'
import { Button, ChevronDownIcon, Text, useModal, Flex, Box } from '@arborswap/uikit'
import { NETWORK_ICON, NETWORK_LABEL } from 'config/constants/chains'
import CustomLogo from 'components/Logo/CustomLogo'
import styled from 'styled-components'
import { getCurrencySymbol } from 'utils/getNativeName'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../PortalSearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'
import { RowBetween } from '../Layout/Row'
import { Input as NumericalInput } from './NumericalInput'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
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
const Container = styled.div<{ hideInput: boolean }>`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 4px;
  padding: 0.75rem 1rem;
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput?: (value: string) => void
  onMax?: () => void
  onHalf?: () => void
  showMaxButton: boolean
  label?: string
  amount?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function PortalInputPanel({
  value,
  onUserInput,
  onMax,
  onHalf,
  showMaxButton,
  label,
  amount,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const chainId = useNetworkChainId()
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()
  const translatedLabel = label || t('Input')
  const translatedAmount = amount || t('Amount')

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (
    <InputPanel id={id}>
      <Container hideInput={hideInput}>
        {!hideInput && (
          <>
            <LabelRow>
              <RowBetween align="">
                <Flex justifyContent="center">
                  <Text fontSize="16px" marginRight="4px">
                    {translatedLabel}
                  </Text>
                  <CustomLogo image={NETWORK_ICON[chainId]} />
                  <Text marginLeft="4px" fontSize="16px">
                    {NETWORK_LABEL[chainId]}
                  </Text>
                </Flex>
                <Flex justifyContent="center">
                  {account && (
                    <Text onClick={onMax} fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
                      {!hideBalance && !!currency && selectedCurrencyBalance
                        ? t('Bal: %amount%', { amount: selectedCurrencyBalance?.toSignificant(6) ?? '' })
                        : 'Bal : -'}
                    </Text>
                  )}
                  <Box marginLeft="4px" />
                  <Button width="40px" onClick={onMax} scale="xs" variant="primary">
                    MAX
                  </Button>
                </Flex>
              </RowBetween>
            </LabelRow>
          </>
        )}
        <InputRow style={hideInput ? { padding: '0', borderRadius: '8px' } : {}} selected={disableCurrencySelect}>
          {!hideInput && (
            <>
              <>
                <NumericalInput
                  className="token-amount-input"
                  value={value}
                  onUserInput={(val) => {
                    onUserInput(val)
                  }}
                />
              </>
              {label !== 'To' && (
                <CurrencySelectButton
                  selected={!!currency}
                  className="open-currency-select-button"
                  onClick={() => {
                    if (!disableCurrencySelect) {
                      onPresentCurrencyModal()
                    }
                  }}
                >
                  <Flex width="100%" alignItems="center" justifyContent="space-between">
                    {pair ? (
                      <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
                    ) : currency ? (
                      <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
                    ) : null}
                    {pair ? (
                      <Text id="pair">
                        {getCurrencySymbol(pair?.token0, chainId)}:{getCurrencySymbol(pair?.token1, chainId)}
                      </Text>
                    ) : (
                      <Text id="pair">
                        {(currency && currency.symbol && currency.symbol.length > 20
                          ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                              currency.symbol.length - 5,
                              currency.symbol.length,
                            )}`
                          : getCurrencySymbol(currency, chainId)) || t('Select a currency')}
                      </Text>
                    )}
                    {!disableCurrencySelect && <ChevronDownIcon />}
                  </Flex>
                </CurrencySelectButton>
              )}
            </>
          )}
        </InputRow>
      </Container>
    </InputPanel>
  )
}
