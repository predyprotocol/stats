/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface BaseStrategyInterface extends ethers.utils.Interface {
  functions: {
    'operator()': FunctionFragment
    'setOperator(address)': FunctionFragment
    'strategies(uint256)': FunctionFragment
    'strategyCount()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'operator', values?: undefined): string
  encodeFunctionData(functionFragment: 'setOperator', values: [string]): string
  encodeFunctionData(
    functionFragment: 'strategies',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'strategyCount',
    values?: undefined
  ): string

  decodeFunctionResult(functionFragment: 'operator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setOperator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'strategies', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'strategyCount',
    data: BytesLike
  ): Result

  events: {
    'Initialized(uint8)': EventFragment
    'OperatorUpdated(address)': EventFragment
    'StrategyAdded(uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OperatorUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'StrategyAdded'): EventFragment
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>

export type OperatorUpdatedEvent = TypedEvent<[string] & { operator: string }>

export type StrategyAddedEvent = TypedEvent<
  [BigNumber, BigNumber] & { strategyId: BigNumber; pairId: BigNumber }
>

export class BaseStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: BaseStrategyInterface

  functions: {
    operator(overrides?: CallOverrides): Promise<[string]>

    setOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    strategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          lastHedgeTimestamp: BigNumber
          lastHedgePrice: BigNumber
          hedgeInterval: BigNumber
          hedgeSqrtPriceThreshold: BigNumber
        }
      ] & {
        id: BigNumber
        pairGroupId: BigNumber
        pairId: BigNumber
        vaultId: BigNumber
        marginToken: string
        marginRoundedScaler: BigNumber
        strategyToken: string
        hedgeStatus: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          lastHedgeTimestamp: BigNumber
          lastHedgePrice: BigNumber
          hedgeInterval: BigNumber
          hedgeSqrtPriceThreshold: BigNumber
        }
      }
    >

    strategyCount(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  operator(overrides?: CallOverrides): Promise<string>

  setOperator(
    _newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  strategies(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      string,
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        lastHedgeTimestamp: BigNumber
        lastHedgePrice: BigNumber
        hedgeInterval: BigNumber
        hedgeSqrtPriceThreshold: BigNumber
      }
    ] & {
      id: BigNumber
      pairGroupId: BigNumber
      pairId: BigNumber
      vaultId: BigNumber
      marginToken: string
      marginRoundedScaler: BigNumber
      strategyToken: string
      hedgeStatus: [BigNumber, BigNumber, BigNumber, BigNumber] & {
        lastHedgeTimestamp: BigNumber
        lastHedgePrice: BigNumber
        hedgeInterval: BigNumber
        hedgeSqrtPriceThreshold: BigNumber
      }
    }
  >

  strategyCount(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    operator(overrides?: CallOverrides): Promise<string>

    setOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>

    strategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          lastHedgeTimestamp: BigNumber
          lastHedgePrice: BigNumber
          hedgeInterval: BigNumber
          hedgeSqrtPriceThreshold: BigNumber
        }
      ] & {
        id: BigNumber
        pairGroupId: BigNumber
        pairId: BigNumber
        vaultId: BigNumber
        marginToken: string
        marginRoundedScaler: BigNumber
        strategyToken: string
        hedgeStatus: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          lastHedgeTimestamp: BigNumber
          lastHedgePrice: BigNumber
          hedgeInterval: BigNumber
          hedgeSqrtPriceThreshold: BigNumber
        }
      }
    >

    strategyCount(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {
    'Initialized(uint8)'(
      version?: null
    ): TypedEventFilter<[number], { version: number }>

    Initialized(version?: null): TypedEventFilter<[number], { version: number }>

    'OperatorUpdated(address)'(
      operator?: null
    ): TypedEventFilter<[string], { operator: string }>

    OperatorUpdated(
      operator?: null
    ): TypedEventFilter<[string], { operator: string }>

    'StrategyAdded(uint256,uint256)'(
      strategyId?: null,
      pairId?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { strategyId: BigNumber; pairId: BigNumber }
    >

    StrategyAdded(
      strategyId?: null,
      pairId?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { strategyId: BigNumber; pairId: BigNumber }
    >
  }

  estimateGas: {
    operator(overrides?: CallOverrides): Promise<BigNumber>

    setOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    strategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    strategyCount(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    strategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    strategyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}