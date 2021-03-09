// 아폴로 - Reactive Variables: 장바구니의 상태를 담음.
// makeVar 안에 상태를 집어넣을 것임.

import { makeVar, ReactiveVar } from "@apollo/client";
import { CartItems } from "./models/caritems";

export const cartItemVar: ReactiveVar<CartItems> = makeVar<CartItems>([]);