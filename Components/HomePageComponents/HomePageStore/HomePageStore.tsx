"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import data from "@/data/products.json";

type Region = {
      key: string;
      label: string;
      city: { key: string; label: string; multiplier: number }[];
};
type Pack = { label: string; value: number; bonus: number };

export default function BuySection() {
      const [token, setToken] = useState<string>(data.token[0]);
      const regions: Region[] = data.server.region;
      const cityOptions = useMemo(
            () =>
                  regions.flatMap((r) =>
                        r.city.map((c) => ({
                              value: `${r.key}|${c.key}`,
                              label: `${r.label} – ${c.label}`,
                              multiplier: c.multiplier,
                        }))
                  ),
            [regions]
      );
      const [selectedServer, setSelectedServer] = useState<string>(
            cityOptions[0].value
      );
      const [quantity, setQuantity] = useState<number>(2000);
      const [category, setCategory] = useState<string>(data.categories[0].key);
      const [notifIdx, setNotifIdx] = useState<number>(0);

      useEffect(() => {
            const id = setInterval(
                  () => setNotifIdx((i) => (i + 1) % data.notifications.length),
                  4000
            );
            return () => clearInterval(id);
      }, []);

      const [regionKey, cityKey] = selectedServer.split("|");
      const { multiplier } = cityOptions.find((o) => o.value === selectedServer)!;
      const baseUnitPrice = 0.01184;
      const unitPrice = baseUnitPrice * multiplier;
      const totalPrice = (quantity * unitPrice).toFixed(2);
      const isActivePack = (value: number) => value === quantity;
      const packs: Pack[] = data.quantityPacks;

      const inputBoxClass =
            "w-full h-14 bg-background border border-stroke p-3 rounded-lg";

      return (
            <div className="my-12 w-full lg:max-w-4/5 mx-auto">
                  {/* Main Panel */}
                  <div
                        className="flex flex-col lg:flex-row gap-6 rounded-2xl text-white"
                        style={{
                              minHeight: "auto",
                        }}
                  >
                        {/* Hot Sale */}
                        <div
                              className="bg-secondaryBackground shadow-md p-4 rounded-xl flex-shrink-0 w-full lg:w-[350px] "
                              style={{
                                    boxShadow: "10px 10px 20px 0px var(--primaryGradient)",
                              }}
                        >
                              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <span className="text-2xl">🔥</span> Hot Sale
                              </h3>
                              <div className="grid grid-cols-2 gap-3">
                                    {data.hotSale.map((item, i) => (
                                          <div
                                                key={i}
                                                className="w-full h-16 flex items-center gap-2 border border-stroke p-2 rounded-lg hover:border-primary transition"
                                          >
                                                <Image
                                                      src={item?.image}
                                                      alt={item?.title}
                                                      width={40}
                                                      height={40}
                                                      className="rounded-sm w-10 h-10 object-cover"
                                                />
                                                <span className="text-xs text-white">{item.title}</span>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* Purchase Panel */}
                        <div className="flex-1 bg-secondaryBackground shadow-md py-10 px-5 rounded-xl flex flex-col justify-between min-w-0">
                              <div className="flex flex-col md:flex-row gap-10 text-textPrimary h-full">
                                    {/* Left Side */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                                          {/* Token Dropdown */}
                                          <div>
                                                <select
                                                      value={token}
                                                      onChange={(e) => setToken(e.target.value)}
                                                      className={inputBoxClass}
                                                >
                                                      {data.token.map((t) => (
                                                            <option key={t} value={t}>
                                                                  {t}
                                                            </option>
                                                      ))}
                                                </select>
                                          </div>

                                          {/* Category Tabs */}
                                          <div className="flex flex-wrap gap-3 my-4">
                                                {data.categories.map((c) => (
                                                      <button
                                                            key={c.key}
                                                            onClick={() => setCategory(c.key)}
                                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${category === c.key
                                                                        ? "text-primary border-primary"
                                                                        : "bg-background border border-stroke text-textPrimary"
                                                                  }`}
                                                      >
                                                            <Image src={c.icon} alt={c.label} width={20} height={20} />
                                                            <span className="text-sm">{c.label}</span>
                                                      </button>
                                                ))}
                                          </div>

                                          {/* Server Dropdown */}
                                          <div>
                                                <select
                                                      value={selectedServer}
                                                      onChange={(e) => setSelectedServer(e.target.value)}
                                                      className={inputBoxClass}
                                                >
                                                      {regions.map((r) => (
                                                            <optgroup key={r.key} label={r.label}>
                                                                  {r.city.map((c) => (
                                                                        <option key={c.key} value={`${r.key}|${c.key}`}>
                                                                              {c.label}
                                                                        </option>
                                                                  ))}
                                                            </optgroup>
                                                      ))}
                                                </select>
                                          </div>

                                          {/* Note */}
                                          <div className="mt-4 text-xs text-textSecondary space-y-1">
                                                <p>⚠️ Prices may vary by server location</p>
                                          </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                                          {/* Quantity Control */}
                                          <div className="flex justify-between items-center gap-5 rounded-lg">
                                                <label className="text-xl text-textSecondary whitespace-nowrap">
                                                      Quantity (G)
                                                </label>
                                                <div className="w-full h-14 flex items-center justify-between gap-2 bg-background border border-stroke p-2 rounded-lg">
                                                      <button
                                                            onClick={() => setQuantity((q) => Math.max(0, q - 100))}
                                                            className="w-10 h-10 rounded-lg text-xl"
                                                      >
                                                            −
                                                      </button>
                                                      <span className="w-16 text-center">{quantity}</span>
                                                      <button
                                                            onClick={() => setQuantity((q) => q + 100)}
                                                            className="w-10 h-10 rounded-lg text-xl"
                                                      >
                                                            +
                                                      </button>
                                                </div>
                                          </div>

                                          {/* Quantity Packs */}
                                          <div className="flex flex-wrap gap-4 my-4">
                                                {packs.map((p) => (
                                                      <button
                                                            key={p.label}
                                                            onClick={() => setQuantity(p.value)}
                                                            className={`relative px-4 py-2 rounded-lg text-sm min-w-[80px] text-center ${isActivePack(p.value)
                                                                        ? "text-primary border border-primary"
                                                                        : "bg-background border border-stroke text-textPrimary"
                                                                  }`}
                                                      >
                                                            {p.label}
                                                            {p.bonus > 0 && (
                                                                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[10px] bg-pink-500 text-white px-1 rounded">
                                                                        +{p.bonus}%
                                                                  </span>
                                                            )}
                                                      </button>
                                                ))}
                                          </div>

                                          {/* Price & Buy Button */}
                                          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                                                <div className="text-3xl font-bold text-secondary">
                                                      <span className="text-5xl font-bold">
                                                            <span className="text-textPrimary">$</span>
                                                            {totalPrice.split(".")[0]}
                                                      </span>
                                                      <span className="text-xl">.{totalPrice.split(".")[1]}</span>
                                                </div>

                                                <button className="w-full sm:w-auto px-8 py-3 bg-primary rounded-lg text-white font-semibold hover:opacity-90 transition">
                                                      BUY
                                                </button>
                                          </div>

                                          {/* Note */}
                                          <div className="mt-4 text-xs text-gray-400 space-y-1">
                                                <p>Expected delivery time: 10 minutes - 24 hours</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Notification Ticker */}
                  <div className="flex items-center gap-3 bg-secondaryBackground shadow-md p-3 rounded-lg text-yellow-400 text-sm overflow-hidden mt-8">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a1 1 0 011-1h14a1 1 0 011 1v2a8 8 0 11-16 0V6z" />
                        </svg>
                        <div className="overflow-hidden whitespace-nowrap">
                              <div
                                    className="inline-block animate-marquee"
                                    style={{
                                          animationDuration: `${data.notifications.length * 4}s`,
                                    }}
                              >
                                    {data.notifications[notifIdx]}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
