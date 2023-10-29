import SocialButton from "~/components/button/socialButton";
import { IconGithub, IconLinkedin } from "~/components/icons";
import { cn } from "~/utils/cn";

interface SocialsProps {
  clasName?: string;
}

const Socials: React.FC<SocialsProps> = ({ clasName }) => {
  return (
    <div
      className={cn(clasName, "flex justify-center gap-2 lg:justify-normal")}
    >
      <SocialButton href="https://www.linkedin.com/in/lukasgreicius/">
        <IconLinkedin className="h-8 w-8" />
      </SocialButton>
      <SocialButton href="https://github.com/lgreitis/">
        <IconGithub className="h-8 w-8" />
      </SocialButton>
    </div>
  );
};

export default Socials;
