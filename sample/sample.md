
# Sample Markdown File w/ Mustache Variables

## Links for References:

- [Github Flavored Markdown](https://github.github.com/gfm/)
- [YAML Syntax](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
- [Mustache Variables](https://github.com/janl/mustache.js/blob/master/README.md#variables) and [Mustache Manual](https://mustache.github.io/mustache.5.html)
- [Coffee Ipsum](http://coffeeipsum.com/)

## Sample Paragraph Explanation w/ Codeblock

Dark aroma rich, brewed single shot, organic in bar  body mocha to go single origin. 
Body so, sit a, spoon con panna as brewed variety aged roast. 
Extra  half and half cultivar roast, medium half and half pumpkin spice aromatic sugar plunger pot robusta.

Cultivar et saucer eu doppio carajillo redeye. Chicory caramelization et, froth, coffee so viennese robust aged. Dark cappuccino, brewed et sugar redeye half and half cultivar single origin.

```python
!
interface vlan 5
description DATA
ip address {{FIRSTIP}}
exit
interface vlan 6
description VOICE
ip address {{SECONDIP}}
!
```

{{#sampleHidden}}
> This content will not show up in the final render!
{{/sampleHidden}}

| Number |
| ------ |
{{#sampleLoop}}
| {{number}} |
{{/sampleLoop}}

> Check the `sample.yml` to see how the values from that file got replaced with their Mustache variables in this file!
