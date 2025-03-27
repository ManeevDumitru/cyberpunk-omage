export async function loadLayoutMiddleware(route: any) {
  try {
    const layout = route.meta.layout || "default";
    const layoutComponent = await import(`../../layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    console.log("Error in the router middleware", e);
  }
}
