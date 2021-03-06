import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";

export interface CustomNavbarItemProps {
  additionalCss?: string;
  text: string;
  icon?:
    | "HomeIcon"
    | "BookOpenIcon"
    | "UserGroupIcon"
    | "BriefcaseIcon"
    | "AnnotationIcon"
    | string;
  iconColor?: string;
  iconSize?: number;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  id?: string;
}

export const MainNavbarItem = ({
  additionalCss,
  icon,
  text,
  onClick,
  iconColor,
  iconSize,
  id,
}: CustomNavbarItemProps) => {
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case "HomeIcon":
        return (
          <HomeIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case "BookOpenIcon":
        return (
          <BookOpenIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case "UserGroupIcon":
        return (
          <UserGroupIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case "AnnotationIcon":
        return (
          <AnnotationIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case "BriefcaseIcon":
        return (
          <BriefcaseIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      default:
      case "none":
        return "";
    }
  };
  return (
    <a
      className="flex bg-white md:bg-gray-50 items-center content-center md:rounded-lg lg:px-4 py-6 text-sm text-gray-800 border-l-4 border-transparent cursor-pointer hover:text-yellow-500 hover:bg-gray-100"
      role="menuitem"
      tabIndex={-1}
      id={id}
      data-cy={`${text.toLowerCase()}-main-navbar-item`}
      onClick={onClick}
    >
      <div className="flex content-center mx-auto md:mx-2">
        {icon && (
          <div className="mr-2 text-yellow-500 h-6 w-6">{iconSwitch(icon)}</div>
        )}
        {text}
      </div>
    </a>
  );
};

export default MainNavbarItem;
