type Menu = {
  label: string;
  path: string;
};

export const menus: Menu[] = [
  {
    label: "MOVIES",
    path: "/movies",
  },
  {
    label: "TV SHOWS",
    path: "/tv-shows",
  },
  {
    label: "LOGIN",
    path: "/login",
  },
];

export const handleSidebar = () => {
  const sidebarRef = ref<any>(null);

  const showSidebar = () => {
    sidebarRef.value?.showSidebar();
  };

  return {
    sidebarRef,
    showSidebar,
  };
};
