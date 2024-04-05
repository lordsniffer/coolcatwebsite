import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-start items-start flex-col">
      <header className="flex justify-start items-start flex-col w-full p-4 bg-slate-800">
        <div className="w-full relative overflow-hidden h-[34px]">
          <p className="absolute text-2xl whitespace-nowrap scroll1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵</p>
          <p className="absolute text-2xl whitespace-nowrap scroll2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$cool the cat stays cool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😸🩵</p>
        </div>
      </header>
      <section className="w-full flex justify-start items-center flex-col py-16 bg-slate-700">
        <h1 className="text-7xl text-center">
          WHAT IS $COOL ?
        </h1>
        <h2 className="mt-6 text-2xl text-center">
          LITERALLY JUST A CAT THAT STAYS COOL
        </h2>
        <Image src="/coolcat-original.jpg" alt="image" width={500} height={500} className="mt-8" />
      </section>
      <section className="bg-slate-800 flex justify-start items-center flex-col w-full py-16">
        <h2 className="text-7xl text-center">
          WHAT IS $COOL? BE COOL
        </h2>
        <video className="h-[600px] max-w-full mt-6" controls autoPlay muted>
          <source src="/cool.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="flex justify-start items-center flex-col w-full py-16 bg-slate-700">
        <h2 className="text-7xl text-center">GET $COOL THE COOLEST</h2>
        <div className="w-8/12 mt-6 grid xl:grid-cols-3 gap-12 py-4">
          <div className="rounded-xl border-[6px] bg-slate-800 border-gray-900 px-4 py-8 flex justify-start items-center flex-col gap-6 relative">
            <div className="-top-4 left-0 absolute w-full">
              <div className="flex justify-center items-center">
                <p className="bg-gray-900 px-2 rounded-lg">RUNNER UP</p>
              </div>
            </div>
            <Image src="/wiflogo.png" width="120" height="120" alt="wif" />
            <h4 className="text-3xl">dogwifhat</h4>
            <h3 className="text-4xl">$WIF</h3>
            <p className="bg-yellow-700 px-2 rounded-lg">GOOD CHOICE</p>
            <div className="flex justify-start items-start flex-col">
              <p>
                ✅ literally a dog wif a hat
              </p>
              <p>
                ✅ sol and doge beta
              </p>
            </div>
            <Link className="w-full" target="_blank" href="https://jup.ag/swap/SOL-CooL79s3d23Zd2RfMXTRmUnfbAWBt4H6thn4sVkmYR9h">
              <p className="text-md w-full py-1 border-2 text-center rounded-full hover:bg-white transition-all hover:text-black">BUY $COOL</p>
            </Link>
          </div>
          <div className="rounded-xl border-[6px] bg-slate-800 border-blue px-4 py-8 flex justify-start items-center flex-col gap-6 relative">
            <div className="-top-4 left-0 absolute w-full">
              <div className="flex justify-center items-center">
                <p className="bg-blue px-2 rounded-lg">WINNER</p>
              </div>
            </div>
            <Image src="/coolcat-logo.png" width="120" height="120" alt="wif" />
            <h4 className="text-3xl">coolcat</h4>
            <h3 className="text-4xl">$COOL</h3>
            <p className="bg-green-700 px-2 rounded-lg">COOLEST CHOICE</p>
            <div className="flex justify-start items-start flex-col">
              <p>
                ✅ literally a cat staying cool
              </p>
              <p>
                ✅ wif beta
              </p>
            </div>
            <Link className="w-full" target="_blank" href="https://jup.ag/swap/SOL-CooL79s3d23Zd2RfMXTRmUnfbAWBt4H6thn4sVkmYR9h">
              <p className="text-md w-full py-1 border-2 text-center rounded-full hover:bg-white transition-all hover:text-black">BUY $COOL</p>
            </Link>
          </div>
          <div className="rounded-xl border-[6px] bg-slate-800 border-gray-900 px-4 py-8 flex justify-start items-center flex-col gap-6 relative">
            <div className="-top-4 left-0 absolute w-full">
              <div className="flex justify-center items-center">
                <p className="bg-gray-900 px-2 rounded-lg">THIRD CHOICE</p>
              </div>
            </div>
            <Image src="/ethereume.png" width="120" height="120" alt="wif" />
            <h4 className="text-3xl">ethereum</h4>
            <h3 className="text-4xl">$ETH</h3>
            <p className="bg-red-700 px-2 rounded-lg">BAD CHOICE</p>
            <div className="flex justify-start items-start flex-col">
              <p>
                ❌ not cool enough
              </p>
              <p>
                ❌ no hat
              </p>
            </div>
            <Link className="w-full" target="_blank" href="https://jup.ag/swap/SOL-CooL79s3d23Zd2RfMXTRmUnfbAWBt4H6thn4sVkmYR9h">
              <p className="text-md w-full py-1 border-2 text-center rounded-full hover:bg-white transition-all hover:text-black">BUY $COOL</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-start items-center flex-col w-full py-16 bg-slate-800">
        <h2 className="text-7xl text-center">
          THE CAT IS $COOL
        </h2>
        <div className="flex justify-start items-center flex-col text-center w-full gap-4 mt-12">
          <p className="text-2xl">
            69%
            <br></br>
            Airdropped to $WIF holders
          </p>
          <p className="text-2xl">
            31%
            <br></br>
            Liquidity and burned
          </p>
          <p className="text-2xl">
            100%
            <br></br>
            think $COOL is cool
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-8">
        <p className="text-4xl text-center">THE MANIFESTO IS CLEAR, WE STAY COOL</p>
        <iframe src="https://q7xzo5otvqbn2ip6h66bpephu7t52f3xdbrea4hycder4g2fxdta.arweave.net/h--XddOsAt0h_j-8F5Hnp-fdF3cYYkBw-BDJHhtFuOY" className="w-full min-h-[500px] my-8" loading="lazy" title="manifesto"/>


        <Link className="w-full" target="_blank" href="https://jup.ag/swap/SOL-CooL79s3d23Zd2RfMXTRmUnfbAWBt4H6thn4sVkmYR9h">
          <p className="text-md w-full py-1 border-2 text-center rounded-full hover:bg-white transition-all hover:text-black">BUY $COOL</p>
        </Link>
        </div>
      </section>
      <footer className="py-8 bg-slate-800 w-full flex justify-center items-center gap-7">
        <Link href="https://t.me/coolcatonsolana" target="_blank" className="hover:underline transition-all">
          telegram
        </Link>
        <Link href="https://twitter.com/coolcat_sol" target="_blank" className="hover:underline transition-all">
          twitter
        </Link>
        <Link href="https://solscan.io/token/CooL79s3d23Zd2RfMXTRmUnfbAWBt4H6thn4sVkmYR9h" target="_blank" className="hover:underline transition-all">
          contract
        </Link>
        <Link href="https://dexscreener.com/solana/3v6bfpfttdmvua5d9kalxrm1z7bt5hsbtkcqeg2ueiu4" target="_blank" className="hover:underline transition-all">
          chart
        </Link>
      </footer>
    </main>
  );
}
