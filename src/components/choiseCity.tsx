'use client';
import Link from 'next/link';
export default function ChoiseCity() {
  const subdomains = {
    simferopol: 'simferopol',
    sevastopol: 'sevastopol',
    alusta: 'alusta',
    yalta: 'yalta',
    kerch: 'kerch',
  };

  return (
    <select>
      <option value={subdomains.simferopol}></option>
      <option value={subdomains.sevastopol}></option>
      <option value={subdomains.alusta}></option>
      <option value={subdomains.yalta}></option>
      <option value={subdomains.kerch}></option>
    </select>
  );
}
