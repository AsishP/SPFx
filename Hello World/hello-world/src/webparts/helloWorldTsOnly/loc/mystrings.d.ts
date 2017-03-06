declare interface IHelloWorldTsOnlyStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloWorldTsOnlyStrings' {
  const strings: IHelloWorldTsOnlyStrings;
  export = strings;
}
