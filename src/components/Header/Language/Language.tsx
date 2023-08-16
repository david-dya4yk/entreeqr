import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC, useRef, useState } from "react";
import { useClickAway } from "react-use";
import * as S from "./Language.styled";

enum LanguageCode {
  UA = "UA",
  EN = "EN",
}

const languages = [
  {
    name: "UA",
    code: LanguageCode.UA,
    icon: Icons.UA,
  },
  {
    name: "EN",
    code: LanguageCode.EN,
    icon: Icons.EN,
  },
];

const Language: FC = () => {
  const [lang, setLang] = useState<LanguageCode>(LanguageCode.UA);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickAway(wrapperRef, () => setOpen(false));

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Label onClick={() => setOpen((prev) => !prev)}>
        {languages.find((l) => l.code === lang)?.name}
        <Icon name={Icons.ChevronDown} size={16} rotate={open ? 180 : 0} />
      </S.Label>
      {open && (
        <S.Dropdown>
          {languages.map((l) => (
            <S.Item
              active={l.code === lang}
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
            >
              <Icon name={l.icon} />
              {l.name}
            </S.Item>
          ))}
        </S.Dropdown>
      )}
    </S.Wrapper>
  );
};

export default Language;
