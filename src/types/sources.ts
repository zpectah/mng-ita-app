export interface SourcesTabsRows {
  name: string;
  description?: string;
  ita: {
    main: string;
    pron?: string;
  };
  eng: {
    main: string;
    pron?: string;
  };
  extension: string[];
}

export interface SourcesTabs {
  id: string;
  name: string;
  description?: string;
  rows: SourcesTabsRows[];
}

export interface Sources {
  version: string;
  tabs: SourcesTabs[];
}
