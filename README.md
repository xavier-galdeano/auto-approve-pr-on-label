# auto-approve-pr-on-label

Auto pr approval on label

## Inputs

### `auto-approve-pr-on-label`

**Required** GITHUB_TOKEN.

**Required** LABEL. The label to auto approve pr.

## Example usage

```yaml
uses: xavier-galdeano/auto-approve-pr-on-label@v1
with:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  LABEL: "critical"
```
