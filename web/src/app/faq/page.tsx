import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <div className="d-flex w-full mt-10 h-1/2">
        <iframe height={600} className="w-full h-50"
          src="https://viewer.typebot.io/chat-venus-25m8mqn"
        // style="border: none; width='100%'; height='600px'"
        ></iframe>
      </div>

      {/* <Popup typebot="chat-venus-25m8mqn" />; */}
    </BaseLayout>
  )
}
