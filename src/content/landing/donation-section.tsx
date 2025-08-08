import { Button } from "@mdx/components/ui/button";

interface Props {
    toggleDialog: () => void;
}

export const DonationSection = ({ toggleDialog }: Props) => {
  const onClick = () => {
    window.open("https://drizzle.team/donate", "_blank");
  };
  return (
    <div className="flex flex-col items-end justify-center" onClick={toggleDialog}>
      <Button variant="link" className="h-fit" onClick={onClick}>
        I love it &#x2661;
      </Button>
    </div>
  );
};
