// @flow

export type TeaserProviderOptions = {|
    displayProperties: Array<string>,
    listAdapter: string,
    overlayTitle: string,
    resourceKey: string,
    title: string,
|};

export type TeaserItem = {|
    description?: ?string,
    edited?: boolean,
    id: number | string,
    mediaId?: ?number,
    title?: ?string,
    type: string,
|};

export type TeaserSelectionValue = {|
    items: Array<TeaserItem>,
    presentAs: ?string,
|};

export type PresentationItem = {
    label: string,
    value: string,
};