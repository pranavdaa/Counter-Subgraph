import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { Decrease, Increase } from "../generated/Cnt/Cnt"

export function createDecreaseEvent(ct: BigInt): Decrease {
  let decreaseEvent = changetype<Decrease>(newMockEvent())

  decreaseEvent.parameters = new Array()

  decreaseEvent.parameters.push(
    new ethereum.EventParam("ct", ethereum.Value.fromUnsignedBigInt(ct))
  )

  return decreaseEvent
}

export function createIncreaseEvent(ct: BigInt): Increase {
  let increaseEvent = changetype<Increase>(newMockEvent())

  increaseEvent.parameters = new Array()

  increaseEvent.parameters.push(
    new ethereum.EventParam("ct", ethereum.Value.fromUnsignedBigInt(ct))
  )

  return increaseEvent
}
