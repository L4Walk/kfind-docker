"use client";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { HotSpot } from "@/app/components/hotspot-search";
import { Search } from "@/app/components/search";
import React from "react";
import { AllLangs, ALL_LANG_OPTIONS, changeLang, getLang } from "./locales";

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      {/* 语言下拉菜单 */}
      <div className="absolute top-0 right-0 m-4">
        <select
          className="rounded border border-gray-300 text-zinc-400 bg-white p-1 shadow-sm text-sm"
          value={getLang()}
          onChange={(e) => {
            changeLang(e.target.value as any);
          }}
        >
          {AllLangs.map((lang) => (
            <option value={lang} key={lang}>
              {" "}
              {ALL_LANG_OPTIONS[lang]}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <Logo></Logo>
        <Search></Search>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1 flex-wrap justify-right">
            <HotSpot query="美国阿波罗登月造假?" />
            <HotSpot query="胖猫事件惊天大反转！谭竹被冤枉，姐姐引导舆论?" />
            <HotSpot query="伊朗总统坠机身亡，事件时间线?" />
          </div>
          <div className="flex gap-1 flex-wrap justify-right">
            <HotSpot query="《庆余年2》在线播放地址?" />
            <HotSpot query="特斯拉将在华建立自动驾驶数据中心?" />
            <HotSpot query="全网一周热点事件梳理，时间线、观点一键打尽" />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
