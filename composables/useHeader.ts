export const menus: string[] = ["Movies", "TV Shows", "LOGIN"];

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
