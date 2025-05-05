import Cards from "./components/cards";
enum Side {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
}
interface RoadmapCard {
  image: JSX.Element;
  description: string;
  index: number;
  side: Side;
}

interface RoadmapData {
  title: string | null;
  cards: RoadmapCard[];
}
const TimeTitle = ({ text }: { text: string | null }) => {
  return (
    <span className="font-nb font-light text-[20px] leading-[24px] tracking-[-0.6px] text-white">
      {text}
    </span>
  );
};

const MobileDesign = ({ roadmap_datas }: { roadmap_datas: RoadmapData[] }) => {
  return (
    <>
      {roadmap_datas.map((roadmap_data, index) => (
        <div className="flex flex-col gap-6" key={index}>
          <TimeTitle text={roadmap_data.title} />
          {roadmap_data.cards.map((card, cardIndex) => (
            <Cards
              isMobile={true}
              description={card.description}
              index={card.index}
              key={cardIndex}
              side={card.side}
            >
              {card.image}
            </Cards>
          ))}
        </div>
      ))}
    </>
  );
};

export default MobileDesign;
