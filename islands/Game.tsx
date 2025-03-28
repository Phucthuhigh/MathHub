import { type Signal, useSignal } from "@preact/signals";
import { VNode } from "preact/src/index.d.ts";

type GameCardProps = {
  name: string;
  description: string;
  href: string;
  image: string;
  children?: any;
};

export default function GameCard(props: GameCardProps) {
  const showModal = useSignal(false);

  return (
    <>
      <button
        type="button"
        class="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between hover:scale-110 ease-out transition-all"
        onClick={() => {
          showModal.value = true;
        }}
      >
        <div class="flex flex-col relative gap-2 items-center text-balance text-center text-blue-400">
          <img src={`/${props.image}`} class="w-full h-auto" />
          <h2 class="text-xl font-bold">{props.name}</h2>
          <p class="">{props.description}</p>
        </div>
      </button>
      <div
        class={`fixed inset-0 bg-black/50 flex justify-center transition-all duration-300 z-10 p-4 ${
          showModal.value ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) showModal.value = false;
        }}
      >
        <div class="sticky top-4 flex flex-col gap-2 bg-white rounded-lg shadow-lg p-4 w-full max-w-lg h-max max-h-[90vh]">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">{props.name} - Hướng dẫn chơi</h2>
            <button
              type="button"
              class="text-red-500"
              onClick={() => (showModal.value = false)}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="flex flex-col gap-1 overflow-y-auto py-2 border-y max-h-[80dvh] border-black/50">
            {props.children}
          </div>
          <a
            class="bg-blue-400 px-3 py-2 rounded-lg mx-auto mt-2"
            href={props.href}
          >
            Chơi ngay →
          </a>
        </div>
      </div>
    </>
  );
}
