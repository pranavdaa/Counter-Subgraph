// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Decrease extends ethereum.Event {
  get params(): Decrease__Params {
    return new Decrease__Params(this);
  }
}

export class Decrease__Params {
  _event: Decrease;

  constructor(event: Decrease) {
    this._event = event;
  }

  get ct(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Increase extends ethereum.Event {
  get params(): Increase__Params {
    return new Increase__Params(this);
  }
}

export class Increase__Params {
  _event: Increase;

  constructor(event: Increase) {
    this._event = event;
  }

  get ct(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Cnt extends ethereum.SmartContract {
  static bind(address: Address): Cnt {
    return new Cnt("Cnt", address);
  }

  count(): BigInt {
    let result = super.call("count", "count():(uint256)", []);

    return result[0].toBigInt();
  }

  try_count(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("count", "count():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  get(): BigInt {
    let result = super.call("get", "get():(uint256)", []);

    return result[0].toBigInt();
  }

  try_get(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("get", "get():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DecCall extends ethereum.Call {
  get inputs(): DecCall__Inputs {
    return new DecCall__Inputs(this);
  }

  get outputs(): DecCall__Outputs {
    return new DecCall__Outputs(this);
  }
}

export class DecCall__Inputs {
  _call: DecCall;

  constructor(call: DecCall) {
    this._call = call;
  }
}

export class DecCall__Outputs {
  _call: DecCall;

  constructor(call: DecCall) {
    this._call = call;
  }
}

export class IncCall extends ethereum.Call {
  get inputs(): IncCall__Inputs {
    return new IncCall__Inputs(this);
  }

  get outputs(): IncCall__Outputs {
    return new IncCall__Outputs(this);
  }
}

export class IncCall__Inputs {
  _call: IncCall;

  constructor(call: IncCall) {
    this._call = call;
  }
}

export class IncCall__Outputs {
  _call: IncCall;

  constructor(call: IncCall) {
    this._call = call;
  }
}
