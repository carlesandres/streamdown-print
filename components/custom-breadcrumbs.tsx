import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface CustomBreadcrumbsProps {
  parentHref: string;
  parentTitle: string;
  title: string;
}

export const CustomBreadcrumbs = (props: CustomBreadcrumbsProps) => {
  const { parentHref, parentTitle, title } = props;

  return (
    <div className="not-prose mb-2 max-w-[65ch]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={parentHref}>{parentTitle}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
