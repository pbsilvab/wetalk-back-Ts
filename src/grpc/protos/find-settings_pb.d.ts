// package: find_settings
// file: find-settings.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FindSettings extends jspb.Message { 
    clearSearchableFieldsList(): void;
    getSearchableFieldsList(): Array<string>;
    setSearchableFieldsList(value: Array<string>): void;
    addSearchableFields(value: string, index?: number): string;

    clearFiltersList(): void;
    getFiltersList(): Array<FindSettings.FilterSetting>;
    setFiltersList(value: Array<FindSettings.FilterSetting>): void;
    addFilters(value?: FindSettings.FilterSetting, index?: number): FindSettings.FilterSetting;

    clearOrdersList(): void;
    getOrdersList(): Array<FindSettings.OrderSetting>;
    setOrdersList(value: Array<FindSettings.OrderSetting>): void;
    addOrders(value?: FindSettings.OrderSetting, index?: number): FindSettings.OrderSetting;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindSettings.AsObject;
    static toObject(includeInstance: boolean, msg: FindSettings): FindSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindSettings;
    static deserializeBinaryFromReader(message: FindSettings, reader: jspb.BinaryReader): FindSettings;
}

export namespace FindSettings {
    export type AsObject = {
        searchableFieldsList: Array<string>,
        filtersList: Array<FindSettings.FilterSetting.AsObject>,
        ordersList: Array<FindSettings.OrderSetting.AsObject>,
    }


    export class FilterSetting extends jspb.Message { 
        getField(): string;
        setField(value: string): void;

        getText(): string;
        setText(value: string): void;

        clearOptionsList(): void;
        getOptionsList(): Array<FindSettings.FilterSetting.FilterOption>;
        setOptionsList(value: Array<FindSettings.FilterSetting.FilterOption>): void;
        addOptions(value?: FindSettings.FilterSetting.FilterOption, index?: number): FindSettings.FilterSetting.FilterOption;

        getMulti(): boolean;
        setMulti(value: boolean): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FilterSetting.AsObject;
        static toObject(includeInstance: boolean, msg: FilterSetting): FilterSetting.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FilterSetting, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FilterSetting;
        static deserializeBinaryFromReader(message: FilterSetting, reader: jspb.BinaryReader): FilterSetting;
    }

    export namespace FilterSetting {
        export type AsObject = {
            field: string,
            text: string,
            optionsList: Array<FindSettings.FilterSetting.FilterOption.AsObject>,
            multi: boolean,
        }


        export class FilterOption extends jspb.Message { 
            getValue(): string;
            setValue(value: string): void;

            getText(): string;
            setText(value: string): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): FilterOption.AsObject;
            static toObject(includeInstance: boolean, msg: FilterOption): FilterOption.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: FilterOption, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): FilterOption;
            static deserializeBinaryFromReader(message: FilterOption, reader: jspb.BinaryReader): FilterOption;
        }

        export namespace FilterOption {
            export type AsObject = {
                value: string,
                text: string,
            }
        }

    }

    export class OrderSetting extends jspb.Message { 
        getField(): string;
        setField(value: string): void;

        getText(): string;
        setText(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrderSetting.AsObject;
        static toObject(includeInstance: boolean, msg: OrderSetting): OrderSetting.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrderSetting, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrderSetting;
        static deserializeBinaryFromReader(message: OrderSetting, reader: jspb.BinaryReader): OrderSetting;
    }

    export namespace OrderSetting {
        export type AsObject = {
            field: string,
            text: string,
        }
    }

}

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}

export class FindFilter extends jspb.Message { 
    getField(): string;
    setField(value: string): void;

    getValue(): string;
    setValue(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindFilter.AsObject;
    static toObject(includeInstance: boolean, msg: FindFilter): FindFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindFilter;
    static deserializeBinaryFromReader(message: FindFilter, reader: jspb.BinaryReader): FindFilter;
}

export namespace FindFilter {
    export type AsObject = {
        field: string,
        value: string,
    }
}

export class SearchTerm extends jspb.Message { 
    clearFieldsList(): void;
    getFieldsList(): Array<string>;
    setFieldsList(value: Array<string>): void;
    addFields(value: string, index?: number): string;

    getValue(): string;
    setValue(value: string): void;

    getMatch(): SearchTerm.Match;
    setMatch(value: SearchTerm.Match): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchTerm.AsObject;
    static toObject(includeInstance: boolean, msg: SearchTerm): SearchTerm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchTerm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchTerm;
    static deserializeBinaryFromReader(message: SearchTerm, reader: jspb.BinaryReader): SearchTerm;
}

export namespace SearchTerm {
    export type AsObject = {
        fieldsList: Array<string>,
        value: string,
        match: SearchTerm.Match,
    }

    export enum Match {
    LIKE = 0,
    EXACT = 1,
    }

}

export class PageInfo extends jspb.Message { 
    getEndCursor(): string;
    setEndCursor(value: string): void;

    getHasNextPage(): boolean;
    setHasNextPage(value: boolean): void;

    getStartCursor(): string;
    setStartCursor(value: string): void;

    getHasPreviousPage(): boolean;
    setHasPreviousPage(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PageInfo): PageInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageInfo;
    static deserializeBinaryFromReader(message: PageInfo, reader: jspb.BinaryReader): PageInfo;
}

export namespace PageInfo {
    export type AsObject = {
        endCursor: string,
        hasNextPage: boolean,
        startCursor: string,
        hasPreviousPage: boolean,
    }
}
