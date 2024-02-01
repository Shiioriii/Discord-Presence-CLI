import * as shiorii from 'shiorii';
import * as rpcCli from 'discord-rich-presence-cli';

class MyApplication {
  private shioriiInstance: shiorii.ShioriiClass;
  private rpcCliInstance: rpcCli.DiscordRichPresenceCliClass;

  constructor() {
    this.shioriiInstance = new shiorii.ShioriiClass();
    this.rpcCliInstance = new rpcCli.DiscordRichPresenceCliClass();
  }

  start() {
    this.shioriiInstance.initialize();
    const dataFromShiorii = this.shioriiInstance.getData();


    this.shioriiInstance.cleanup();

    this.rpcCliInstance.clearRichPresence();

    this.shioriiInstance.shutdown();
  }
}

const rpcCLiExtended = new MyApplication();
rpcCLiExtended.start();