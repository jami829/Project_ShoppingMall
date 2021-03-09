// 리액티브 배이어블즈: 장바구니의 상태를 담음.

import { makeVar, ReactiveVar } from "@apollo/client";
import { CartItems } from "./models/caritems";

export const cartItemVar: ReactiveVar<CartItems> = makeVar<CartItems>([]);