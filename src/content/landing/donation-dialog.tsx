import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@mdx/components/ui/dialog";
import { useState } from "react";
import { HeartFilledIcon } from "@radix-ui/react-icons";

import artem from "./team/artem.jpg";
import bloberenober from "./team/bloberenober.png";
import blokh from "./team/blokh.png";
import homenko from "./team/homenko.jpg";
import mike from "./team/mike.jpg";
import reka from "./team/reka.png";
import roman from "./team/roman.jpg";
import sherman from "./team/sherman.png";
import vitalii from "./team/vitalii.jpg";
import vlad from "./team/vlad.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@mdx/components/ui/tooltip";
import { Button } from "@mdx/components/ui/button";
import { GlobeIcon } from "lucide-react";

const drizzleTeam: { name: string; photo: string; url?: string }[] = [
  {
    name: "Andrew Sherman",
    photo: sherman.src,
  },
  {
    name: "Dan Kochetov",
    photo: bloberenober.src,
  },
  {
    name: "Alex Blokh",
    photo: blokh.src,
  },
  {
    name: "Mykhailo Stratovych",
    photo: mike.src,
  },
  {
    name: "Roman Nabukhotnyi",
    photo: roman.src,
  },
  {
    name: "Vladislav Stohnii",
    photo: vlad.src,
  },
  {
    name: "Serhii Reka",
    photo: reka.src,
  },
  {
    name: "Oleksii Khomenko",
    photo: homenko.src,
  },
  {
    name: "Artem Odiiko",
    photo: artem.src,
  },
  {
    name: "Vitalii Staryk",
    photo: vitalii.src,
  },
];

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DonationDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="text-foreground w-[28rem] h-fit gap-0 p-6"
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
        aria-describedby="confirm-deletion-dialog"
      >
        <DialogHeader>
          <DialogTitle>We are Drizzle Team</DialogTitle>
          <DialogDescription className="!mt-3" asChild>
            <div className="relative whitespace-nowrap flex items-center">
              {drizzleTeam.map((dev, index) => (
                <TooltipProvider key={dev.name}>
                  <Tooltip delayDuration={150}>
                    <TooltipTrigger asChild>
                      <div
                        key={dev.name}
                        className="mr-[-12px] relative"
                        style={{
                          zIndex: drizzleTeam.length - index,
                        }}
                      >
                        <img
                          className="size-10 rounded-full border-2 border-background grayscale hover:grayscale-0"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          src={dev.photo}
                          alt={dev.name}
                          width="70"
                          height="70"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-[0.8125rem]">
                      {dev.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </DialogDescription>
          <div className="!mt-6">
            We love what we do and your financial contributions let us stay
            sustainable and keep shipping open-source projects and FREE products
            like Drizzle Gateway
            <br />
            <br /> THANK YOU!
          </div>
        </DialogHeader>
        <DialogFooter className="flex !justify-between mt-14">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              className="p-0 size-9"
              size="sm"
              onClick={() => {
                window.open("https://twitter.com/DrizzleORM", "_blank");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                data-astro-cid-lxfsrojm=""
              >
                <path
                  d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
                  data-astro-cid-lxfsrojm=""
                ></path>
              </svg>
            </Button>
            <Button
              variant="outline"
              className="p-0 size-9"
              size="sm"
              onClick={() => {
                window.open("https://discord.gg/yfjTbVXMW4", "_blank");
              }}
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 5 30.67 23.25"
                data-astro-cid-lxfsrojm=""
              >
                <title>Discord</title>
                <path
                  d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"
                  data-astro-cid-lxfsrojm=""
                ></path>
              </svg>
            </Button>
            <Button
              variant="outline"
              className="p-0 size-9"
              size="sm"
              onClick={() => {
                window.open("https://driz.link/bydrizzleteam", "_blank");
              }}
            >
              <GlobeIcon className="size-4" />
            </Button>
          </div>
          <Button
            size="sm"
            onClick={() => {
              window.open(
                "https://donate.stripe.com/fZeaFu3CG0NucOQ004?client_reference_id=drizzle-gateway",
                "_blank",
              );
            }}
          >
            <HeartFilledIcon
              className="size-4 text-[#db61a2]"
              strokeWidth={1}
              stroke="#ce2f84"
            />
            Donate to Drizzle
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
