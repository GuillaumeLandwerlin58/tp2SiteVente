"use client";

import React, { FC, memo, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuBar, Button } from "tp-kit/components";
import { ShoppingBag, X } from "@phosphor-icons/react";
import {clearCart, removeLine, updateLine, useStore} from "../hooks/use-cart";
import {ProductCartLine} from "tp-kit/components/products";
import Cart from "./Cart";
import CartCounter from "./CartCounter";

type Props = {};

const Menu: FC<Props> = memo(function () {
    console.log("rendu page");
    const lines = useStore((state) => state.lines);

  return (
    <MenuBar
      trailing={
        <Popover as="div" className="flex justify-end">
          {({ open }) => (
            <>
              <Popover.Button as={Button} variant={"ghost"} className={"!rounded-full !p-0 flex justify-center items-center aspect-square relative text-3xl"}>
                {open 
                  ? <X size={18} weight="regular" />
                  : <ShoppingBag size={24} weight="regular" />}

                <CartCounter/>
              </Popover.Button>


              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-0 sm:left-auto right-0 top-full z-10 mt-6 sm:w-full sm:max-w-sm">
                  <Cart/>

                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      }
    />
  );

});

Menu.displayName = "Menu";
export { Menu };
