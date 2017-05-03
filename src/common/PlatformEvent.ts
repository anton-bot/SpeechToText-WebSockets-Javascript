/// <reference path="GuidGenerator.ts"/>
/// <reference path="IDictionary.ts"/>

namespace Common {

    export enum EventType {
        Debug,
        Info,
        Warning,
        Error,
    }

    export class PlatformEvent {
        private eventId: string;
        private eventTime: string;
        private eventType: EventType;
        private metadata: IStringDictionary<string>;

        constructor(eventType: EventType) {
            this.eventId = GuidGenerator.CreateGuidWithNoDash();
            this.eventTime = new Date().toISOString();
            this.eventType = eventType;
            this.metadata = { };
        }

        public get EventId(): string {
            return this.eventId;
        }

        public get EventTime(): string {
            return this.eventTime;
        }

        public get EventType(): EventType {
            return this.eventType;
        }

        public get Metadata(): IStringDictionary<string> {
            return this.metadata;
        }
    }
}