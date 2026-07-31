# Content

This is Rodrigo's real business, not a client project. Content decisions are his.

## Confirmed facts

- Based in **Monterroso, Lugo**, Galicia.
- The honey currently sold is **mil flores** (multifloral), in 1 kg / 500 g / 300 g jars at
  10 € / 6 € / 4 €.
- Flowering: **silva** (bramble), **castaño** (chestnut) and **eucalipto**, plus whatever else
  is out at the time. Chestnut gives the intense base, bramble the softer fruity side.
- **Shipping exists**, by Correos, and the buyer pays the postage.
- Pickup in person is also offered, around his own area.

## Never describe the colour

Rodrigo asked for this explicitly: the honey looks darker in the current photo than it really
is, and the colour changes from one harvest to the next. Describe flavour, texture and
flowering — never colour, and never contrast it with "pale supermarket honey".

Also: **carballo (oak) is not a nectar source.** It is wind-pollinated. Never list it among the
flowerings; it belongs only in descriptions of the surrounding woodland.

## Still unconfirmed — never state these

- The postage amount, delivery time, and whether shipping covers islands or only the mainland.
  Current copy says the amount depends on parcel weight and is confirmed before closing the
  order. Keep it that way until Rodrigo gives figures.
- Whether there is a minimum order, and any return or breakage policy.
- Prices, harvest volume, hive count, sanitary registration.
- Concello and social handles — the concello is guarded by the publish gate in
  `src/data/site.test.ts`. Phone and email come from the environment and fail the build if
  absent; never hardcode them back into `src/data/site.ts`.

When a fact is missing: use a clearly-flagged example value and say so in the reply. Never let
a placeholder pass as real.

## The publish gate

- `src/data/site.test.ts` fails on purpose while `site.ts` still holds example values, in the
  `site config is ready to publish` block.
- Never delete those tests, weaken the assertion, or skip the step in CI. They exist to stop a
  fake phone number reaching the public internet.

## Tone

- Plain, concrete, first person plural. It is a smallholder, not a brand.
- No unverifiable health claims about honey, pollen or propolis.
- Never commit to a delivery time, postage figure, refund or stock level on his behalf.
