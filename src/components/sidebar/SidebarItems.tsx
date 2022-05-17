import { HomeIcon, 
         BookOpenIcon, 
         UserGroupIcon,
         BriefcaseIcon, 
         AnnotationIcon
} from '@heroicons/react/solid';

export interface CustomSidebarItemProps {
  text: string;
  openSidebar: boolean;
  icon?:
    | 'HomeIcon'
    | 'BookOpenIcon'
    | 'UserGroupIcon'
    | 'BriefcaseIcon'
    | 'AnnotationIcon'
    | string;
  iconColor?: string;
  iconSize?: number;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  id?: string;
}

export const CustomSidebarItem = ({
  icon,
  text,
  onClick,
  iconColor,
  iconSize,
  id,
  openSidebar,
}: CustomSidebarItemProps) => {
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'HomeIcon':
        return (
          <HomeIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case 'BookOpenIcon':
        return (
          <BookOpenIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case 'UserGroupIcon':
        return (
          <UserGroupIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case 'AnnotationIcon':
        return (
          <AnnotationIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      case 'BriefcaseIcon':
        return (
          <BriefcaseIcon
            color={iconColor}
            width={iconSize ? iconSize : undefined}
            height={iconSize ? iconSize : undefined}
          />
        );
      default:
      case 'none':
        return '';
    }
  };
  return (
    <a
      className='flex w-full items-start rounded-lg px-2 py-2 text-lg text-white border-transparent cursor-pointer hover:text-gray-500 hover:bg-gray-50'
      role='menuitem'
      tabIndex={-1}
      id={id}
      onClick={onClick}
    >
      {icon && (
        <div className='mr-2 text-lava-red flex-shrink-0 h-6 w-6 items-center'>
          {iconSwitch(icon)}
        </div>
      )}
      <span className={`${!openSidebar && 'hidden' } origin-left duration-400`}>{text}</span>
    </a>
  );
};