type CardSection = GoogleAppsScript.Card_Service.CardSection

export function build_section(): CardSection {
    return CardService.newCardSection()
        .setHeader("Section")
        .addWidget(CardService.newTextParagraph().setText("Some Paragraph"))
}
