import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { Decrease } from "../generated/schema"
import { Decrease as DecreaseEvent } from "../generated/Cnt/Cnt"
import { handleDecrease } from "../src/cnt"
import { createDecreaseEvent } from "./cnt-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ct = BigInt.fromI32(234)
    let newDecreaseEvent = createDecreaseEvent(ct)
    handleDecrease(newDecreaseEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Decrease created and stored", () => {
    assert.entityCount("Decrease", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Decrease",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ct",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
