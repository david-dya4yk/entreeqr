import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import * as S from "./Dropdown.styled";
import { useClickAway } from "react-use";

interface Option {
  label: string;
  to: string;
  disabled?: boolean;
}

interface DropdownProps {
  label: string;
  options: Option[];
  className?: string;
}

const Dropdown: FC<DropdownProps> = memo(({ label, options, className }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [_, setActiveIndex] = useState<number>(-1);

  useClickAway(wrapperRef, () => {
    setOpen(false);
  });

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const keyboardListener = useCallback(
    (event: KeyboardEvent) => {
      if (!open) return;

      if (event.key === "Tab") {
        setOpen(false);
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        const links = menuRef.current?.querySelectorAll("a") ?? [];
        setActiveIndex((prev) => {
          let newIndex = prev < links.length - 1 ? prev + 1 : 0;
          links[newIndex].focus();
          return newIndex;
        });
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        const links = menuRef.current?.querySelectorAll("a") ?? [];
        setActiveIndex((prev) => {
          let newIndex = prev > 0 ? prev - 1 : links.length - 1;
          links[newIndex].focus();
          return newIndex;
        });
        return;
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyboardListener);

    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  }, [keyboardListener]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      className={[open ? "open" : "", className].join(" ")}
    >
      <S.Trigger
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        onClick={toggle}
        className={open ? "open" : ""}
      >
        <span>{label}</span>
        <Icon name={Icons.ChevronDown} size={16} rotate={open ? 180 : 0} />
      </S.Trigger>

      <S.Menu role="menu" ref={menuRef} aria-hidden={open ? "false" : "true"}>
        {options.map((o, i) => (
          <li key={i}>
            <S.Item href={o.to} role="menuitem">
              <span>{o.label}</span>
            </S.Item>
          </li>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
});

export default Dropdown;
