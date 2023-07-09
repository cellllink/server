export class ControllerRouterConfig {
  tag: string;
  controller: string;

  constructor(baseRoutes: string[]) {
    this.tag = this.createTag(baseRoutes);
    this.controller = this.createController(baseRoutes);
  }

  private createTag(routes: string[]): string {
    return routes.map(r => r.replace(r.charAt(0), r.charAt(0).toUpperCase())).join('');
  }

  private createController(routes: string[]): string {
    return [''].concat(routes).join('/');
  }
}
