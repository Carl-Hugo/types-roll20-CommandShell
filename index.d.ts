declare interface ShellDefinition {
    // I/O functions
    rawWrite(s: string, to: string, style: string, from: string): void;
    write(s: string, to: string, style: string, from: string): void;
    writeAndLog(s: string, to: string): void;
    writeErr(s: string): void;
    sendChat(speakingAs: string, input: string): void;

    // command registration
    registerCommand(commandName: string, signature: string, description: string, callback: (tokens: Array<string>, msg: ChatEventData) => void): void;
    unregisterCommand(commandName: string): void;

    // utility functions
    tokenize(s: string): Array<string>;

    // built-in commands
    helpCommand(args: undefined, msg: ChatEventData): void;
    permissionCommand(args: Array<string>, msg: ChatEventData): void;

    // internal functions
    isFromGM(msg: ChatEventData): boolean;
    hasPermission(msg: ChatEventData, cmd: string): boolean;
    handleApiMessage(msg: ChatEventData): void | true;
    handleChatMessage(msg: ChatEventData): void;
    init(): void;
}

declare const Shell: ShellDefinition;
