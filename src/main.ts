import { build_section } from "./other"

declare let global: any

function render_homepage(event: any) {
    return CardService.newCardBuilder()
        .setName("Homepage")
        .setHeader(CardService.newCardHeader().setTitle("Homepage"))
        .addSection(build_section())
        .build()
}
global.render_homepage = render_homepage

function render_gmail(event: any) {
    return CardService.newCardBuilder()
        .setName("GMail Trigger")
        .setHeader(CardService.newCardHeader().setTitle("GMail Trigger"))
        .addSection(CardService.newCardSection())
        .build()
}
global.render_gmail = render_gmail
