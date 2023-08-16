{{- define "helpers.name" -}}
{{- list .Chart.Name | compact | join "-" -}}
{{- end -}}

{{- define "helpers.ns" -}}
{{- .Release.Namespace -}}
{{- end -}}