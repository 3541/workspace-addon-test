function render_homepage(event: any) {
    let section = CardService.newCardSection()
        .setHeader("Section")
        .addWidget(CardService.newTextParagraph().setText("A Paragraph"))

    return CardService.newCardBuilder()
        .setName("Homepage")
        .setHeader(CardService.newCardHeader().setTitle("Homepage"))
        .addSection(section)
        .build()
}

function render_gmail(event: any) {
    return CardService.newCardBuilder()
        .setName("GMail Trigger")
        .setHeader(CardService.newCardHeader().setTitle("GMail Trigger"))
        .addSection(CardService.newCardSection())
        .build()
}
