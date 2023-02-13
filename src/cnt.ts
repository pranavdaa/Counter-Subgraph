import {
  Decrease as DecreaseEvent,
  Increase as IncreaseEvent
} from "../generated/Cnt/Cnt"
import { Decrease, Increase } from "../generated/schema"

export function handleDecrease(event: DecreaseEvent): void {
  let entity = new Decrease(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ct = event.params.ct

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncrease(event: IncreaseEvent): void {
  let entity = new Increase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ct = event.params.ct

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
