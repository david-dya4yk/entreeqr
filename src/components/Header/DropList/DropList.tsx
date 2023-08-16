import { FC, memo, useState } from "react";
import * as S from "./DropList.styled";
import { Icons } from "@/shared/ui/icons";
import { Icon } from "@/shared/ui/icon";
import Link from "next/link";

interface DropListProps {
  label: string;
  options: {
    label: string;
    to: string;
  }[];
}

const DropList: FC<DropListProps> = memo(({ label, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Head>
        <S.Label>{label}</S.Label>

        <S.Open onClick={() => setOpen((prev) => !prev)}>
          <Icon name={Icons.ChevronDown} rotate={open ? 180 : 0} />
        </S.Open>
      </S.Head>

      {open && (
        <S.List>
          {options.map((o, i) => (
            <S.Item key={i}>
              <Link href={o.to}>{o.label}</Link>
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Wrapper>
  );
});

export default DropList;
